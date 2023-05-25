import { useState } from 'react';
import './css/styles.css';
import Video from './components/Video';
import { AppContext } from './Context';
import ChatBox from './components/ChatBox';

function App() {
  const [closeVideo, setCloseVideo] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [onLastPage, setOnLastPage] = useState(false);
  const [onSecondToLastPage, setOnSecondToLastPage] = useState(false);

  const [status, setStatus] = useState('');

  const selectionOptions = {
    option1: 'I think it does',
    option2: "No it doesn't",
    option3: 'I would love that',
  };

  const questionMessages = {
    message1: 'Does your company possess an EXCELLENCE culture?',
    message2: `That's great to hear!`,
    message3: `The No More Courses website has very useful information and case studies on changing attitudes, awareness, care, behaviors and culture.`,
    message4: `Some of the learning campaigns available at NoMoreCourses are: `,
    message5: `Please feel free to schedule a brief demo; I guarantee it will be time well spent!`,
    message6: `At No More Courses, we have demonstrated our ability to alter cultural attitudes, awareness, concern, and behavior.`,
    message7: `Let me show you how!`,
  };

  return (
    <>
      <AppContext.Provider
        value={{
          closeVideo,
          setCloseVideo,
          selectedOption,
          setSelectedOption,
          selectionOptions,
          questionMessages,
          onLastPage,
          setOnLastPage,
          onSecondToLastPage,
          setOnSecondToLastPage,
          status,
          setStatus,
        }}
      >
        {closeVideo ? <ChatBox /> : <Video />}
      </AppContext.Provider>
    </>
  );
}

export default App;
