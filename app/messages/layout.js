import PropTypes from "prop-types";

// export default async function MessagesLayout({ children }) {
//   const response = await fetch("http://localhost:8080/messages", {
//     headers: {
//       "X-ID": "layout",
//     },
//     /* The `cache: "force-cache"` option in the fetch request is used to explicitly instruct the browser
//    to bypass the cache and make a new network request to fetch the resource. This means that the
//    browser will not use a cached response for the request, but will always make a new request to the
//    server to get the latest data. This can be useful when you want to ensure that you are always
//    getting the most up-to-date information from the server without relying on cached data. */
//     //cache: "force-cache",
//   });
//   const messages = await response.json();
//   const totalMessages = messages.length;

import { getMessages } from "@/lib/messages/messages";

//   return (
//     <>
//       <h1>Important Messages</h1>
//       <p>{totalMessages} messages found</p>
//       <hr />
//       {children}
//     </>
//   );
// }

export default async function MessagesLayout({ children }) {
  //const messages = getMessages();
  const messages = await getMessages();

  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}

MessagesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
