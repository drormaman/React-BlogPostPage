const mixpanel = require("mixpanel-browser");

mixpanel.init("5770b80e14b446f9ab12a8f7ad8e9258");

export const postViewEvent = postTitle => {
	mixpanel.track("post view", { post: `${postTitle}` });
};
