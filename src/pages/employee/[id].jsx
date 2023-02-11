import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function EmployeePage(props) {
  const { employee } = props;

  if (!employee) return (<div>Loading...</div>)
  return (
    <>
      <Head>
        <title>Employees</title>
      </Head>
      <h1>ID: {employee.id}</h1>
      <h2>Full Name: {employee.first_name} {employee.last_name}</h2>
      <div>
        <p>Gender: {employee.gender}</p>
        <p>Age: {employee.age}</p>
        <p>Tel: {employee.phone}</p>
        <p>Email: {employee.email}</p>
        <p>Job Title: {employee.job_title}</p>
        <p>Department: {employee.department}</p>
        <p>Year(s) of experience: {employee.years_of_experience}</p>
        <p>Salary: {employee.salary}</p>
      </div>
      <Link href="/employee">Back to Employee List</Link>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(`Fetching Employee ID: ${context.params['id']}`)
  console.debug(`Fetching ${process.env.APIURL}employee/${context.params['id']}`)
  const ret = await fetch(`${process.env.APIURL}employee/${context.params['id']}`)
  const employee = await ret.json()
  console.log(employee)
  return {
    props: {
      employee
    }
  }

}