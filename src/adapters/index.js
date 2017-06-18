const baseUrl = 'http://localhost:3000/api/v1'

export default class FridgeAdapter  {
  static all(){
    return fetch(`${this.url()}`)
      .then( res => res.json() )
  }

  static create(food){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        food: {
          name: food.name.value,
          expiration_date: food.expiration_date.value,
          quantity: food.quantity.value,
          category_id: parseInt(food.category.value)
        }
      })
    }).then(response => response.json() )
  }

  static update(food){
    return fetch(`${this.url()}/${food.id}`, {
      method: 'PATCH',
      headers: this.headers(),
      body: JSON.stringify({
        food: {
          name: food.name.value,
          days: food.days.value,
          quantity: food.quantity.value,
          category_id: food.category_id.value
        }
      })
    })
  }

  static destroy(id){
    return fetch(`${this.url()}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json() )
  }

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

  static url(){
    return `${baseUrl}/foods`
  }
}
