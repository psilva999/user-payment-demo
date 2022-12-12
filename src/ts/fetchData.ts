export default async function fetchData<I>(url: string): Promise<I | null> {
  try {
    const response = await fetch(url),
          json = response.json()

    if (!response.ok) throw new Error(`Erro: ${ response.status }`)

    return json
  }

  catch (error) {
    if (error instanceof Error) console.error(`Error: ${ error.message }`)

    return null
  }
}
