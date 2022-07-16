// 将三个模块请求的接口函数统一暴露
import * as attr from './product/attr';
import * as spu from './product/spu';
import * as sku from './product/sku';

// 对外暴露
export default{
  attr,
  sku,
  spu
}
