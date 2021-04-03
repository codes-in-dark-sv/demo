import Head from 'next/head';
import MatrixPage from "../components/MatrixPlay";
const  Home = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PULBIC_APP_NAME}</title>
      </Head>
      <div>
        <MatrixPage />
      </div>

    </>
  )
}

export default Home