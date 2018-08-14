import React, { Component } from 'react';
import './App.css';
import { DOMAINES, COMPETENCES, CYCLES } from './fake_data';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

class App extends Component {
  state = {
    treeData: [],
    data: [],
    expandedRows: []
  };

  componentWillMount() {
    this.setState({
      treeData: this.buildTreeTableData(1),
      data: DOMAINES.filter(
        d => d.cycle_id === 1 && d.sous_domaine_id === undefined
      )
    });
  }

  buildTreeTableData(selectedCycle) {
    const treeData = [];

    const domainesFiltered = DOMAINES.filter(
      domaine =>
        domaine.cycle_id === selectedCycle &&
        domaine.sous_domaine_id === undefined
    );

    domainesFiltered.forEach(domaine => {
      const sousDomainesFiltered = DOMAINES.filter(
        d => d.cycle_id === selectedCycle && d.sous_domaine_id === domaine.id
      );
      // On Push le domaine
      treeData.push(domaine);
      if (sousDomainesFiltered.length > 0) {
        sousDomainesFiltered.forEach(sd => {
          // On Push le sous domaine
          treeData.push(sd);
          // On Push les competences liées au sous domaine
          COMPETENCES.filter(
            ct => ct.cycle_id === selectedCycle && ct.domaine_id === sd.id
          ).forEach(ct => treeData.push(ct));
        });
      } else {
        COMPETENCES.filter(
          ct => ct.cycle_id === selectedCycle && ct.domaine_id === domaine.id
        ).forEach(c => treeData.push(c));
      }
    });
    console.log('treeData: ', treeData);

    return treeData;
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter(id => id !== rowId)
      : currentExpandedRows.concat(rowId);

    const prevData = [...this.state.data];
    const newData = [...this.state.data];
    const expandedData = this.state.treeData.filter(
      it => it.domaine_id === rowId
    );
    prevData.forEach((val, i) => {
      if (val.id === rowId) {
        newData.splice(i + 1, 0, ...expandedData);
      }
    });
    this.setState({
      data: newData
    });

    this.setState({ expandedRows: newExpandedRows });
  }

  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.id);
    const itemRows = [
      <tr onClick={clickCallback} key={item.id + item.ref}>
        <td>{item.ref}</td>
        <td>{item.description}</td>
        <td>{item.cycle_id}</td>
      </tr>
    ];

    if (this.state.expandedRows.includes(item.id)) {
      itemRows.push(
        <tr key={item.id + item.ref}>
          <td>{item.ref}</td>
          <td>{item.description}</td>
          <td>{item.cycle_id}</td>
        </tr>
      );
    }

    return itemRows;
  }

  render() {
    const data = this.state.data;
    return (
      <div className="container">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ref</th>
              <th>Description</th>
              <th>Cycle_id</th>
              <th>Domaine/Sous-Domaine ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              const domaineID =
                d.domaine_id !== undefined ? d.domaine_id : d.sous_domaine_id;
              const key = d.id + d.ref;
              const cycle =
                d.cycle_id === CYCLES[0].id
                  ? CYCLES[0].literal
                  : CYCLES[1].literal;
              return (
                <tr onClick={() => this.handleRowClick(d.id)} key={key}>
                  <td>{d.id}</td>
                  <td>{d.ref}</td>
                  <td>{d.description}</td>
                  <td>{cycle}</td>
                  <td>{domaineID}</td>
                  <td>
                    <ButtonGroup>
                      <Button>Modifier</Button>
                      <Button>Supprimer</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
