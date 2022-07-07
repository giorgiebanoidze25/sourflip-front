export const addMessageToStore = (state, payload) => {
  const { message, sender } = payload;
  // if sender isn't null, that means the message needs to be put in a brand new convo
  if (sender !== null) {
    const newConvo = {
      id: message.conversationId,
      otherUser: sender,
      messages: [message],
    };
    newConvo.latestMessageText = message.text;
    return [newConvo, ...state];
  }

  return state.map((convo) => {
    if (convo.id === message.conversationId) {
      return {
        ...convo,
        latestMessageText: message.text,
        messages: convo.messages.concat(message),
      };
      // convo.messages.push(message);
      // convo.latestMessageText = message.text;
      // return convo;
    } else {
      return convo;
    }
  });
};

export const addOnlineUserToStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      return {
        ...convo,
        otherUser: {
          ...convo.otherUser,
          online: true,
        },
      };
      // const convoCopy = { ...convo };
      // convoCopy.otherUser.online = true;
      // return convoCopy;
    } else {
      return convo;
    }
  });
};

export const removeOfflineUserFromStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      return {
        ...convo,
        otherUser: {
          ...convo.otherUser,
          online: false,
        },
      };
      // const convoCopy = { ...convo };
      // convoCopy.otherUser.online = false;
      // return convoCopy;
    } else {
      return convo;
    }
  });
};

export const addSearchedUsersToStore = (state, users) => {
  const currentUsers = {};

  // make table of current users so we can lookup faster
  state.forEach((convo) => {
    currentUsers[convo.otherUser.id] = true;
  });

  const newState = [...state];
  users.forEach((user) => {
    // only create a fake convo if we don't already have a convo with this user
    if (!currentUsers[user.id]) {
      let fakeConvo = { otherUser: user, messages: [] };
      newState.push(fakeConvo);
    }
  });

  return newState;
};

export const addNewConvoToStore = (state, recipientId, message) => {
  return state.map((convo) => {
    if (convo.otherUser.id === recipientId) {
      return {
        ...convo,
        id: message.conversationId,
        latestMessageText: message.text,
        messages: convo.messages.concat(message),
      };
      // convo.id = message.conversationId;
      // convo.messages.push(message);
      // convo.latestMessageText = message.text;
      // return convo;
    } else {
      return convo;
    }
  });
};
