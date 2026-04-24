import './App.css';

const logo = process.env.PUBLIC_URL + '/octofitapp-small.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" width="40" height="40" className="me-2 rounded shadow-sm" style={{background: '#fff'}} />
            <span className="fw-bold app-title">Octofit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '60vh'}}>
              <h1 className="display-4 mb-3">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
              <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
              <Link className="btn btn-primary btn-lg mt-3" to="/activities">Get Started</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
