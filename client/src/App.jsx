function App() {
  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div className="App">
      <h1>GitHub PR Review System</h1>
      <button onClick={handleGitHubLogin}>Connect GitHub</button>
      
    </div>
  );
}

export default App;
