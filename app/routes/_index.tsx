import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({context}: LoaderArgs) => {
  return {
    isAuthenticated: !!context.isAuthenticated
  }
}

export default function Index() {
  const { isAuthenticated } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Home page</h1>
      <div><label>Is authenticated :</label><span>{ isAuthenticated ? 'YES' : 'NO' }</span></div>
      <div><Link to={`/dashboard`}>Dashboard</Link></div>
    </div>
  );
}
