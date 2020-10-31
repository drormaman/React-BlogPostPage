const mixpanel = require("mixpanel-browser");

mixpanel.init("5770b80e14b446f9ab12a8f7ad8e9258");

export const postViewEvent = postTitle => {
	mixpanel.track("Entered a post", { post: `${postTitle}` });
};

export const themeChangeEvent = dark => {
	mixpanel.track("Changed site theme", { dark: `${dark}` });
};

export const focusedOnNameInput = () => {
	mixpanel.track("User started to interact name input");
};

export const focusedOnMessageInput = () => {
	mixpanel.track("User started to interact message input");
};

export const userSubmittedForm = () => {
	mixpanel.track("Comment submitted");
};

// Funnel => Entered a post => started writing name in comment => started writing comment message => submitted comment
