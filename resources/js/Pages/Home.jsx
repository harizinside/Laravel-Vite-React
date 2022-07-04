import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'

export default function Home({  }) {
  return (
    <Layout>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello Haris, welcome to your first Inertia app!</p>
    </Layout>
  )
}
