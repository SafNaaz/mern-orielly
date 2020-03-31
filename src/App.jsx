// const element = (
// 	<div title="Outer div" className="heading">
// 		<h1>Hello World!</h1>
// 	</div>
// );

/*
const continents = ['Africa','America','Asia','etc']

const helloContinents = Array.from(continents, c=> `Hello ${c}!`);
const message = helloContinents.join(' ');

const element = (
	<div title="Outer div" className="heading">
		<h1>{message}</h1>
	</div>
);
*/

/*class HelloWorld extends React.Component{
	render(){
		const continents = ['Africa','America','Asia','etc']
		const helloContinents = Array.from(continents, c=> `Hello ${c}!`);
		const message = helloContinents.join(' ');
		
		return(
		<div title="Outer div" className="heading">
			<h1>{message}</h1>
		</div>
		);
	}
};

const element = <HelloWorld />;*/

const issues = [
  {
    id: 1,
    status: 'New',
    owner: 'Ravan',
    effort: 5,
    created: new Date('2018-08-15'),
    due: undefined,
    title: 'Error in console when clicking Add'
  },
  {
    id: 2,
    status: 'Assigned',
    owner: 'Eddie',
    effort: 14,
    created: new Date('2018-08-16'),
    due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel'
  }
];

class IssueFilter extends React.Component {
  render() {
    return <div>Placeholder for issueFilter</div>;
  }
}

class IssueRow extends React.Component {
  render() {
    //const style = this.props.rowStyle;
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : ''}</td>
        <td>{issue.title}</td>
        {/*<td>{this.props.children}</td>*/}
        {/*<td style={style}>{this.props.issue_title}</td>*/}
      </tr>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    //const rowStyle = { border: '1px solid silver', padding: 4 };
    const issueRows = issues.map(issue => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    return (
      <table className='bordered-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {/*<IssueRow
            rowStyle={rowStyle}
            issue_id={1}
            issue_title='Error in console when clicking add'
          />
          {/*somehow place issue 1 data to this
          <IssueRow
            rowStyle={rowStyle}
            issue_id={2}
            issue_title='Missing bottom border on panel'
          />
          {/*somehow place issue 2 data to this*}
          <IssueRow rowStyle={rowStyle} issue_id={1}>
            'Error in console when clicking add'
          </IssueRow>
          <IssueRow rowStyle={rowStyle} issue_id={2}>
            'Missing <b>bottom</b> border on panel'
		  </IssueRow>*/}
          {issueRows}
        </tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>Placeholder for IssueAdd</div>;
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
        <hr />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('content'));
