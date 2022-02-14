import req from '@/utils/request'

const demo = params => {
  return req.get('api/weather/current/', params)
}

export {demo}