import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import Layout from './layout/Layout';
import UploadPage from './components/UploadPage';

const App = () => {
  return (
    <div className='min-h-screen max-h-screen overflow-auto'>
      <Layout>
        <AuthenticatedTemplate>
          <UploadPage />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>Please sign-in to upload files to your drive.</p>
        </UnauthenticatedTemplate>
      </Layout>
    </div>
  );
};

export default App;
