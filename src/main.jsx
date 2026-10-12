import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught React Error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#FDFBF7', minHeight: '100vh', color: '#6B1D2F' }}>
          <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Application Render Error</h1>
          <p style={{ color: '#2D2A2E', marginBottom: '24px' }}>
            A client-side JavaScript error occurred while rendering the application.
          </p>
          <pre style={{ backgroundColor: '#FAF6EE', padding: '16px', borderRadius: '8px', border: '1px solid #C5A059', overflowX: 'auto', color: '#800020' }}>
            {this.state.error && this.state.error.toString()}
            {'\n'}
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
          <button
            onClick={() => { localStorage.clear(); window.location.reload(); }}
            style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#6B1D2F', color: '#D4AF37', border: 'none', borderRadius: '24px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Clear Cache & Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
