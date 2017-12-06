// timestamp for the signature
let timestamp = +new Date()/1000
// public key from btc average
const public_key = process.env.PUBLICKEY_BTCAVERAGE
// secret from btc average
const secret = process.env.SECRET_BTCAVERAGE
// value needed to make the call (timestamp+"."+public_key signed with the secret)
let digest_value = crypto.createHmac('SHA256', secret).update(`${timestamp}.${public_key}`).digest('hex').toString('base64')