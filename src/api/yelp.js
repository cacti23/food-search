import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer pXEQ7x_DyAZSDd2lA552H71CN0X6YlFrTUCkOw6gqU5A5pn2iQc6uQBSEyNGkYOoGCB88lj2PUpb73emee9rL4LP3bETXaNr1zD9MqrRMyMQLf9RToYnvq_3IMfIZHYx'
  }
});
