export interface detailCards{
  data : detailCard[]
}

export interface detailCard{
  id : number
  name : string
  type : string
  desc : string
  atk : number
  def : number
  level : number
  race : string
  attribute : string
  card_images : card_Image[]
  card_prices : card_price[]
}

export interface card_Image{
  id : number
  image_url: string
  image_url_small : string
}

export interface card_price{
  cardmarket_price: string
  tcgplayer_price: string
  ebay_price: string
  amazon_price: string
  coolstuffinc_price : string
}
