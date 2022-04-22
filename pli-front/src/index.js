import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './components/reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import SearchResults from './routes/SearchResults';
import Topic from './routes/Topic';
import Login from './components/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './providers/AuthProvider';
import AccountPage from './routes/AccountPage';
import RequireAuth from './components/RequireAuth';
import RegisterPage from './routes/RegisterPage';
import EditAccountPage from './routes/EditAccountPage';
import AskQuestionPage from './routes/AskQuestionPage';
import EditTopicPage from './routes/EditTopicPage';
import TagSearchPage from './routes/TagSearchPage';
import SearchProfPage from './routes/SearchProfPage';
import MessageSender from './components/MessageSender';
import InstantMessenger from './components/InstantMessenger';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem", backgroundColor: "white" }}>
                    <p>This page does not exist !</p>
                  </main>
                }
              />
              <Route
                index
                element={
                  <>
                    <Sidebar />
                    <Feed />
                    <Widgets />
                  </>
                }
              />
              <Route path="results" element={<SearchResults />} />
              <Route path="topics/:topicId" element={<Topic />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="account/edit"
                element={
                  <RequireAuth>
                    <EditAccountPage />
                  </RequireAuth>
                }
              />
              <Route
                path="account"
                element={
                  <RequireAuth>
                    <AccountPage />
                  </RequireAuth>
                }
              />
              <Route
                path="topics/ask"
                element={
                  <RequireAuth>
                    <AskQuestionPage />
                  </RequireAuth>
                }
              />
              <Route
                path="topics/:topicId/edit"
                element={
                  <RequireAuth>
                    <EditTopicPage />
                  </RequireAuth>
                }
              />
              <Route
                path="tags/edit"
                element={
                  <RequireAuth>
                    <TagSearchPage />
                  </RequireAuth>
                }
              />
              <Route
                path="professional/search"
                element={
                  <RequireAuth>
                    <SearchProfPage />
                  </RequireAuth>
                }
              />
              <Route
                path="messagerie"
                element={
                  <InstantMessenger />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
