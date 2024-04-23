import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const LayoutPage = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        let LayoutPage = Fragment;
                        if (route.layout === undefined) {
                            LayoutPage = DefaultLayout;
                            return <Route key={index} path={route.path} element={<LayoutPage Page={Page} />} />;
                        } else if (route.layout) {
                            LayoutPage = route.layout;
                            return <Route key={index} path={route.path} element={<LayoutPage Page={Page} />} />;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <LayoutPage>
                                        <Page />
                                    </LayoutPage>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
