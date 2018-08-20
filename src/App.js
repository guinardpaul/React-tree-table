import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { DOMAINES, COMPETENCES } from './fake_data';
import { DragSource } from 'react-dnd';

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

  handleUpdate = obj => {
    if (obj.hasOwnProperty('sous_domaine_id')) {
      if (obj.sous_domaine_id !== undefined) {
        console.log('[Sous-Domaine] updated: ', obj);
      } else {
        console.log('[Domaine] updated: ', obj);
      }
    } else if (obj.hasOwnProperty('domaine_id')) {
      console.log('[Competence] updated: ', obj);
    } else {
      console.log('[Domaine] updated: ', obj);
    }
  };

  handleDelete = obj => {
    console.log('obj deleted: ', obj);
  };

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter(id => id !== rowId)
      : currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  renderItem(item) {
    const buttonName = this.state.expandedRows.includes(item.id) ? '-' : '+';
    const actionsButton = (
      <div>
        <button onClick={() => this.handleUpdate(item)}>Modifier</button>
        <button onClick={() => this.handleDelete(item)}>Supprimer</button>
      </div>
    );
    const clickCallback = () => this.handleRowClick(item.id);
    const itemRows = [
      <tr key={item.id + item.ref}>
        <td>
          <button onClick={clickCallback}>{buttonName}</button>
        </td>
        <td>{item.id}</td>
        <td>{item.ref}</td>
        <td>{item.description}</td>
        <td>{item.cycle_id}</td>
        <td>{actionsButton}</td>
      </tr>
    ];

    if (this.state.expandedRows.includes(item.id)) {
      DOMAINES.filter(
        d => d.cycle_id === item.cycle_id && d.sous_domaine_id === item.id
      ).forEach(d => {
        const clickSousDomaineCallback = () => this.handleRowClick(d.id);
        const actionsButton = (
          <div>
            <button onClick={() => this.handleUpdate(d)}>Modifier</button>
            <button onClick={() => this.handleDelete(d)}>Supprimer</button>
          </div>
        );
        const buttonName = this.state.expandedRows.includes(d.id) ? '-' : '+';
        itemRows.push(
          <tr key={d.id + d.ref}>
            <td>
              <button onClick={clickSousDomaineCallback}>{buttonName}</button>
            </td>
            <td>{d.id}</td>
            <td>{d.ref}</td>
            <td>{d.description}</td>
            <td>{d.cycle_id}</td>
            <td>{actionsButton}</td>
          </tr>
        );

        if (this.state.expandedRows.includes(d.id)) {
          COMPETENCES.filter(
            ct => ct.cycle_id === d.cycle_id && ct.domaine_id === d.id
          ).forEach(ct => {
            const actionsButton = (
              <div>
                <button onClick={() => this.handleUpdate(ct)}>Modifier</button>
                <button onClick={() => this.handleDelete(ct)}>Supprimer</button>
              </div>
            );
            itemRows.push(
              <tr key={ct.id + ct.ref}>
                <td />
                <td>{ct.id}</td>
                <td>{ct.ref}</td>
                <td>{ct.description}</td>
                <td>{ct.cycle_id}</td>
                <td>{actionsButton}</td>
              </tr>
            );
          });
        }
      });

      COMPETENCES.filter(
        ct => ct.cycle_id === item.cycle_id && ct.domaine_id === item.id
      ).forEach(ct => {
        const actionsButton = (
          <div>
            <button onClick={() => this.handleUpdate(ct)}>Modifier</button>
            <button onClick={() => this.handleDelete(ct)}>Supprimer</button>
          </div>
        );
        itemRows.push(
          <tr key={ct.id + ct.ref}>
            <td />
            <td>{ct.id}</td>
            <td>{ct.ref}</td>
            <td>{ct.description}</td>
            <td>{ct.cycle_id}</td>
            <td>{actionsButton}</td>
          </tr>
        );
      });
    }

    return itemRows;
  }

  render() {
    console.log(this.state.expandedRows);
    let allRowItems = [];
    this.state.data.forEach(item => {
      const itemPerRow = this.renderItem(item);
      allRowItems = allRowItems.concat(itemPerRow);
    });

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Ref</th>
            <th>Description</th>
            <th>Cycle_id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{allRowItems}</tbody>
      </table>
    );
  }
}

export default hot(module)(App);
