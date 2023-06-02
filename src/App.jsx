import { useReducer } from 'react';
import './css/styles.css';
import Video from './components/Video';
import { AppContext } from './Context';
import ChatBox from './components/ChatBox';

const initialState = {
  closeVideo: false,
  selectedOption: '',
  onLastSection: false,
  onSecondToLastSection: false,
  selectionOptions: {
    option1: 'I think it does',
    option2: "No it doesn't",
    option3: 'I would love that',
  },
  questionMessages: {
    message1: 'Does your company possess an EXCELLENCE culture?',
    message2: `That's great to hear!`,
    message3: `The No More Courses website has very useful information and case studies on changing attitudes, awareness, care, behaviors and culture.`,
    message4: `Some of the learning campaigns available at NoMoreCourses are: `,
    message5: `Please feel free to schedule a brief demo; I guarantee it will be time well spent!`,
    message6: `At No More Courses, we have demonstrated our ability to alter cultural attitudes, awareness, concern, and behavior.`,
    message7: `Let me show you how!`,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CLOSE_VIDEO':
      return { ...state, closeVideo: true };
    case 'LAST_SECTION':
      return { ...state, onLastSection: true };
    case 'SECOND_TO_LAST_SECTION':
      return { ...state, onSecondToLastSection: true };
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };

    case 'REFRESH_PAGE':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {state.closeVideo ? <ChatBox /> : <Video />}
      </AppContext.Provider>
    </>
  );
}

export default App;
