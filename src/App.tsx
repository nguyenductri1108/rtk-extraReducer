import "./App.css";
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import ListPost from "./listPost";
import { store } from "./store";
import { Provider } from "react-redux";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
    components: {
        Button,
    },
});

function App() {
    return (
        <Provider store={store}>
            <ChakraBaseProvider theme={theme}>
                <ListPost />
            </ChakraBaseProvider>
        </Provider>
    );
}

export default App;
