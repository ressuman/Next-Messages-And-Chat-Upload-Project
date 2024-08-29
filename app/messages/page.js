import Messages from "@/components/messages/messages";
//import { unstable_noStore } from "next/cache";

/** same as setting the revalidate in the next object of the headers of the fetch*/
/* The line `export const revalidate = 5;` is defining a constant named `revalidate` with a value of
`5`. By using the `export` keyword, this constant can be exported and accessed in other parts of the
codebase. In this specific context, it seems to be setting the revalidate time for fetching data to
5 seconds. //export const revalidate = 5;
*/

/** same as setting the cache to no-store in the headers of the fetch*/
/* The line `export const dynamic="force-dynamic"` is defining a constant named `dynamic` with the
value `"force-dynamic"`. This constant can be exported and used in other parts of the code. In this
specific context, it seems to be indicating a dynamic behavior for fetching data, possibly to force
a fresh fetch of data instead of relying on cached responses. The exact implementation and usage of
this constant would depend on the rest of the codebase and how it is utilized within the
application. */
//export const dynamic = "force-dynamic"; /** OR "force-static" */

export default async function MessagesPage() {
  unstable_noStore(); /* The `unstable_noStore()` function is used to indicate that the response from the fetch request
should not be stored in the cache. This is similar to setting the cache control header to
`no-store`, which means that the response should not be stored in any cache, including browser cache
or intermediary caches. This ensures that a fresh response is always fetched from the server instead
of using a cached response. */
  const response = await fetch("http://localhost:8080/messages", {
    /* The `headers: { "X-ID": "page" }` part in the fetch request is setting a custom header with the
    key "X-ID" and the value "page". Custom headers like this can be used to send additional
    information along with the request to the server. */
    headers: {
      "X-ID": "page",
    },
    /* The line `cache: "no-store",` in the fetch request is setting the cache control directive to
  "no-store". This means that the response from the fetch request should not be stored in any cache,
  including browser cache or intermediary caches. By specifying "no-store", the browser and any
  intermediate caches along the request-response path are instructed not to store the response,
  ensuring that a fresh response is always fetched from the server whenever the resource is
  requested. */
    //cache: "no-store",
    /* The `next: { revalidate: 5 }` part in the fetch request is configuring the revalidation behavior
    for fetching data. In Next.js, the `next` object can be used to specify additional options
    related to data fetching and caching. */
    // next: {
    //   revalidate: 5,
    // },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
