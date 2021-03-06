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
const issues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];

class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Placeholder for issueFilter");
  }

}

class IssueRow extends React.Component {
  render() {
    //const style = this.props.rowStyle;
    const issue = this.props.issue;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, issue.title));
  }

}

class IssueTable extends React.Component {
  render() {
    //const rowStyle = { border: '1px solid silver', padding: 4 };
    const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
  }

}

class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Placeholder for IssueAdd");
  }

}

class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null), /*#__PURE__*/React.createElement("hr", null));
  }

}

const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('content'));