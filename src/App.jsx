import { createContext, useReducer, useState } from "react"
import './App.css'
import Home from './components/home/Home'

export const DataContext = createContext();

const initialData = [
    {
        id: 1,
        name: 'Ravi',
        avatar: '',
        messages: [
            {
                text: 'Hi Ravi',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 2,
        name: 'Rahul',
        avatar: '',
        messages: [
            {
                text: 'Hi Rahul',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 3,
        name: 'Ajay',
        avatar: '',
        messages: [
            {
                text: 'Hi Ajay',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 4,
        name: 'Tilak',
        avatar: '',
        messages: [
            {
                text: 'Hi Tilak',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 5,
        name: 'Sue',
        avatar: '',
        messages: [
            {
                text: 'Hi Sue',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 6,
        name: 'Ashwin',
        avatar: '',
        messages: [
            {
                text: 'Hi Ashwin',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 7,
        name: 'Tanya',
        avatar: '',
        messages: [
            {
                text: 'Hi Tanya',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 8,
        name: 'Prem',
        avatar: '',
        messages: [
            {
                text: 'Hi Prem',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 9,
        name: 'Scott',
        avatar: '',
        messages: [
            {
                text: 'Hi Scott',
                timestamp: 1716637976179,
            }
        ]
    },
    {
        id: 10,
        name: 'Ian',
        avatar: '',
        messages: [
            {
                text: 'Hi Ian',
                timestamp: 1716637976179,
            }
        ]
    }
]

function reducer(state, action) {
    switch (action.type) {
        case 'add-msg': {
            const newMsgObj = {
                text: action.value,
                timestamp: Date.now()
            }
            const newMsgArr = [...state[action.idx].messages, newMsgObj]

            return [
                ...state.slice(0, action.idx),
                { ...state[action?.idx], messages: newMsgArr },
                ...state.slice(action.idx + 1)
            ];
        }
        case 'delete':
            return [
                ...state.slice(0, action.idx),
                ...state.slice(action.idx + 1)
            ];
        default:
            return state;
    }
}

function App() {
    const [selectedUserIdx, setSelectedUserIdx] = useState(-1);
    const [data, dispatch] = useReducer(reducer, initialData);

    return (
        <DataContext.Provider value={{ data, dispatch, selectedUserIdx, setSelectedUserIdx }}>
            <Home />
        </DataContext.Provider>
    )
}

export default App;
