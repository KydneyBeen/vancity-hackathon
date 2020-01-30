const {BrowserRouter, Switch, Link, Route} = ReactRouterDOM
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
        <BrowserRouter>
          <Switch>
            {/* <Route path="/profile"> */}
            <Route path="/"> {/* dev */}
              <Profile id="5e32138d0b043616088c29c7" />
            </Route>
            <Route path="/browse">
              <Browse />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      docid:"",
      doc:null
    }
    this.images = this.images.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount () {
    let self = this
    let request = {
      method : 'post',
      headers:
      {'Content-Type': 'application/json'},
      "body" : JSON.stringify({
        dataset: 'coll',
        operation: 'readone',
        params: {
          id: self.props.id
        }
      })
    }
    fetch('/data', request)
      .then((response) => {return response.text()})
      .then((response) => {
        let doc = JSON.parse(response)
        self.setState({doc})
      })
      .catch((error) => {
        console.log('fetch error: ', error)
        self.setState({error:true})
      })
  }

  images () {
    let self = this
    let elements = {__html: self.state.doc.photos.map((photo) => {
        let image = new Image ()
        image.src = "data:img/jpg;base64," + photo.jpg
        image.alt = photo.alttext
        return image
      })}
    return elements.__html
  }
  
  render () {
    return (
      <section className="view ind-profile">
        {this.state.doc ? 
          <section>
            {this.state.doc.values}
            <h1>{this.state.doc.operatingname}</h1>
            {this.state.doc.description.forEach((paragraph) => {
              <p>{paragraph}</p>
            })}
          </section>
          : this.state.error ? 
          <p>Data Error</p>
          : ''
        }
      </section>
    )
  }
}

class Browse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    
  }

  render () {
    return <section className="view"></section>
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    
  }

  render () {
    return <section className="view"></section>
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