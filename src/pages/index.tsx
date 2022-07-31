import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Todo from "../components/Todo";
import { table, minifyRecords, getMinifiedRecord } from "./api/utils/Airtable";

export default function Home(props: any) {
  
  const todos = props.intitialTodos


  return (
    <>
      <Head>
        <title>Airtable Demo</title>
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <div>
        {todos.map((todo: any) =>(
          <Todo key={todo.id} todo={todo} />
        ))}
        </div>
        
      </main>
    </>
  );
};


export async function getServerSideProps(context: GetServerSidePropsContext) {
  
  try{
    const todos = await table.select({}).firstPage()
    return{
      props: {
        intitialTodos: minifyRecords(todos)
      }
    }
  }catch(err) {  
    return{
      props: {
        err: "Something went wrong"
      }
    }
  }
  
}

