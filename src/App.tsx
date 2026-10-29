import Header from "./components/Header";
import PuppiesWrapper from "./components/PuppiesWrapper";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import {LoaderCircle} from "lucide-react";
import {ApiError} from "./types";
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
    return (
    <Provider store={store}>
        <Header />
        <ErrorBoundary fallbackRender={ ({error}) => <p className="text-red-600" >
            {(error as ApiError)?.message || "Error!"}
        </p> }>
            <Suspense fallback={<LoaderCircle className="animate-spin" />}  >
                <PuppiesWrapper />
            </Suspense>
        </ErrorBoundary>
    </Provider>
  )
}

export default App
