
class ApiService {
  constructor(baseUrl, http) {
    this.baseUrl = baseUrl
    this.http = http
  }
  async post(url, body) {
    try {
      let response = await this.http(`${this.baseUrl}/${url}`,
        {
          method: "post",
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(body)
        })
      return { response }
    } catch (error) {
      return { error }
    }
  }
  async get(url) {
    try {
      let response = await this.http(`${this.baseUrl}/${url}`)
      return { response }
    } catch (error) {
      return { error }
    }
  }
}
export default ApiService