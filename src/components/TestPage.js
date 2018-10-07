// import React, {Component} from 'react';
// import {BootstrapTable,TableHeaderColumn} from 'bootstrap-table';
//
//
// import TodoList from "./TodoList";
//
// class TestPage extends React.Component{
//     constructor(){
//         super();
//         this.state = {dataSet:[
//                 {"objectName":"sdfsdfsdf33","userId":"cc","perms":["READ","WRITE"],"id":1}
//             ]
//         }
//     }
//
//     render (){
//         console.log("this.state.dataSet", this.state.dataSet);
//         return (
//             <div className='maxw80 ma'>
//                 <BootstrapTable data={this.state.dataSet}
//                                 striped={true} hover={true} condensed={false} search={true} pagination={true}>
//                     <TableHeaderColumn className='clgrey' dataField="id" isKey={true} dataAlign="center"
//                                        dataSort={true}>#</TableHeaderColumn>
//                     <TableHeaderColumn dataField="objectName" dataSort={true}>name</TableHeaderColumn>
//                     <TableHeaderColumn dataField="userId" dataSort={true}>userName</TableHeaderColumn>
//                     <TableHeaderColumn dataField="perms" dataSort={true}
//                                        dataFormat={(cell, row)=>(<span>{cell.toString()}</span>)}>
//                         auth
//                     </TableHeaderColumn>
//                     <TableHeaderColumn dataField="id">
//                         op
//                     </TableHeaderColumn>
//                 </BootstrapTable>
//                 <button onClick={function(){this.setState({dataSet:[{"objectName":"newdata","userId":"all","perms":["READ"],"id":5}]})}.bind(this)}>change-data</button>
//             </div>
//         )
//     }
// }
//
//
// export default TestPage;