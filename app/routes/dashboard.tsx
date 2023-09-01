import { LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({context}: LoaderArgs) => {
  if (!context.isAuthenticated) {
    return redirect(`/remix-login`);
  }

  return {
    isAuthenticated: !!context.isAuthenticated
  }
}

export default function Dashboard() {
  const { isAuthenticated } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Dashboard protected view</h1>
      <div><label>Is authenticated :</label><span>{ isAuthenticated ? 'YES' : 'NO' }</span></div>
    </div>
  );
}