import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
  projectId: 'a8apllhm',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skmuyaostNqPZBJjzkTktuIqIvKOGEM5uoBTclD1GCHejXX0SJRK1PXeN0rwLVeMXzf4VxhP9Tj2xScU3yhNrijwGe2bOIQzatRsQzR7XSL25b6XlOjT3c9CqKDEyNT7Qzr3yimMCUikg2mymAmC1Oq41t4aUGZzCjyJ99XEHQHhrNwUPlO1',

})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);