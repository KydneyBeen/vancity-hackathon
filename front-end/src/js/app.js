class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view:'',
      user:''
    }
    this.eventHolder = []
  }

  render () {
    return (
      <main>
        <Header
          view={this.state.view}
        />
        <Nav
          view={this.state.view}
          user={this.state.user}
        />
        <span>Router goes here</span>
      </main>
    )
  }
}

function Header (props) {
  const titles = {
    list: "Browse",
    profile: "Member Profile",
    create: "Create A Profile",
    edit: "Edit Your Profile",
    filter: "Filter"
  }
    return (
      <header>
        <button style={{float:'left'}}>X</button>
        {titles[props.view]}
        <button style={{float:'right'}}>X</button>
      </header>
    )
}

function Nav (props) {
  const menu = [props.user, "Home", "Accounts", "Pay Bills", "Transfers", "Interac e-Transfers", "Deposit", "Scheduled", "Fair & Fast Loan", "Messages", "Community+", "Create Profile", "Bookmarks", "Find Us", "Contact Us", "More"]
  let navlist = menu.map((link) => {
    return (
      <a href={"/" + link.toLowerCase().replace(/ /g, "-")}>{link}</a>
    )
  })
  return (
    <nav>
      {navlist}
    </nav>
  )
}

ReactDOM.render(<Main />, document.getElementById('main'));