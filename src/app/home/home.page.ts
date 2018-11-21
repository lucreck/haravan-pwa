import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  codeOver = `
  apiUrlGateWay = "https://us-central1-haravan-web-pwa.cloudfunctions.net/haravan";
  shopHandle = "suplo-food";
  theme_id = "1000332461";

  apiUrl = \`\${apiUrlGateWay}/\${shopHandle}\`

  //Cấu trúc link cơ bản ghép lại như sau
  basicApiUrl = \`\${apiUrl}/\${endpoint}?theme_id=\${this.themeId}\`

  Http service example:
  get(endpoint, options?: Object) {
    return this.http.get(\`\${this.apiUrl}\${endpoint}\`, options)
  }
  `

  apiLists = [
    {
      "endpoint": "/collections/:handle",
      "description":  "Danh sách sản phẩm của nhóm sản phẩm truy xuất bởi handle",
      "code": `
      getCollectionByHandle(handle, page = 1, sortType = "newest"){
        this.get(\`\${apiUrl}/collections/\${handle}?view=json&page=\${page}&sort_by=\${sortType}&theme_id=\${this.themeId}\`)
      }
      `,
      "res": {
        "products": [
          {
            "id": 1017630275,
            "title": "Dây chuyền DC MAMD 130",
            "featured_image": "//hstatic.net/0/0/global/noDefaultImage6_large.gif",
            "handle": "day-chuyen-dc-mamd-130",
            "compare_at_price": 0,
            "compare_at_price_format": "0₫",
            "price": 193500000,
            "price_format": "1,935,000₫",
            "available": true,
            "sale": "-0%"
          }
        ],
        "paginate": {
          "pages": 158,
          "items": 1257,
          "current_page": 1,
          "hasNext": true
        }
      }
    },
    {
      "endpoint": "/products/:endpoint",
      "description":  "Thông tin chi tiết sản phẩm",
      "res": {
        "available": true,
        "compare_at_price_max": 0,
        "compare_at_price_min": 0,
        "compare_at_price_varies": false,
        "compare_at_price": 0,
        "content": null,
        "description": "<p>Nhẫn cưới kim cương NCKC 457 được chế tác từ kim cương tự nhiên kết hợp với chất liệu vàng biểu tượng cho sự trường tồn vĩnh cửu, tình yêu bất tử. Kim cương đã chiếm vị trí độc tôn cao quý của mình qua nhiều thế kỷ, một viên kim cương nắm giữ sức mạnh khiến cho lời thề trong hôn nhân trở nên vĩnh cửu.&nbsp;</p>",
        "featured_image": "https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg",
        "handle": "nhan-cuoi-nc457",
        "id": 1005946074,
        "images": [
          "https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg",
          "https://product.hstatic.net/1000112469/product/img_0581-min.jpg",
          "https://product.hstatic.net/1000112469/product/1-min_aec5c84d124c42b78d45d5704321c545.jpg",
          "https://product.hstatic.net/1000112469/product/img_0574-min.jpg"
        ],
        "options": [
          {
            "name": "Màu sắc",
            "position": 1
          }
        ],
        "price": 1778800000,
        "price_max": 1778800000,
        "price_min": 1778800000,
        "price_varies": false,
        "tags": [
          "mausac_Trắng",
          "Nhẫn cứới kim cương",
          "Nhẫn Cưới"
        ],
        "template_suffix": null,
        "title": "Nhẫn cưới kim cương NCKC 457 (Giá 1 đôi)",
        "type": "nhẫn cưới",
        "url": "/products/nhan-cuoi-nc457",
        "pagetitle": "Nhẫn cưới kim cương NCKC 457",
        "metadescription": "Nhẫn cưới kim cương NCKC 457 đặc biệt ấn tượng với 2 thiết kế nhẫn khác nhau nhưng vẫn làm nổi bật được vẻ đẹp của sự thống nhất.",
        "variants": [
          {
            "id": 1014150583,
            "barcode": "NC457",
            "available": true,
            "price": 1778800000,
            "sku": "NCKC457",
            "option1": "Trắng",
            "option2": "",
            "option3": "",
            "options": [
              "Trắng"
            ],
            "inventory_quantity": 1,
            "old_inventory_quantity": 1,
            "title": "Trắng",
            "weight": 0,
            "compare_at_price": 0,
            "inventory_management": null,
            "inventory_policy": "deny",
            "selected": false,
            "url": null,
            "featured_image": null
          }
        ],
        "vendor": "Nhẫn cưới kim cương",
        "published_at": "2016-12-14T09:49:34.433Z",
        "created_at": "2017-07-06T09:29:14.804Z",
        "not_allow_promotion": false
      },
      "code": `
      getProduct(handle){
        return this.get(\`/products/\${handle}\`)
      }
      `
    },
    {
      "endpoint": "/cart",
      "description":  "Thông tin chi tiết giỏ hàng",
      "res": {
        "available": true,
        "compare_at_price_max": 0,
        "compare_at_price_min": 0,
        "compare_at_price_varies": false,
        "compare_at_price": 0,
        "content": null,
        "description": "<p>Nhẫn cưới kim cương NCKC 457 được chế tác từ kim cương tự nhiên kết hợp với chất liệu vàng biểu tượng cho sự trường tồn vĩnh cửu, tình yêu bất tử. Kim cương đã chiếm vị trí độc tôn cao quý của mình qua nhiều thế kỷ, một viên kim cương nắm giữ sức mạnh khiến cho lời thề trong hôn nhân trở nên vĩnh cửu.&nbsp;</p>",
        "featured_image": "https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg",
        "handle": "nhan-cuoi-nc457",
        "id": 1005946074,
        "images": [
          "https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg",
          "https://product.hstatic.net/1000112469/product/img_0581-min.jpg",
          "https://product.hstatic.net/1000112469/product/1-min_aec5c84d124c42b78d45d5704321c545.jpg",
          "https://product.hstatic.net/1000112469/product/img_0574-min.jpg"
        ],
        "options": [
          {
            "name": "Màu sắc",
            "position": 1
          }
        ],
        "price": 1778800000,
        "price_max": 1778800000,
        "price_min": 1778800000,
        "price_varies": false,
        "tags": [
          "mausac_Trắng",
          "Nhẫn cứới kim cương",
          "Nhẫn Cưới"
        ],
        "template_suffix": null,
        "title": "Nhẫn cưới kim cương NCKC 457 (Giá 1 đôi)",
        "type": "nhẫn cưới",
        "url": "/products/nhan-cuoi-nc457",
        "pagetitle": "Nhẫn cưới kim cương NCKC 457",
        "metadescription": "Nhẫn cưới kim cương NCKC 457 đặc biệt ấn tượng với 2 thiết kế nhẫn khác nhau nhưng vẫn làm nổi bật được vẻ đẹp của sự thống nhất.",
        "variants": [
          {
            "id": 1014150583,
            "barcode": "NC457",
            "available": true,
            "price": 1778800000,
            "sku": "NCKC457",
            "option1": "Trắng",
            "option2": "",
            "option3": "",
            "options": [
              "Trắng"
            ],
            "inventory_quantity": 1,
            "old_inventory_quantity": 1,
            "title": "Trắng",
            "weight": 0,
            "compare_at_price": 0,
            "inventory_management": null,
            "inventory_policy": "deny",
            "selected": false,
            "url": null,
            "featured_image": null
          }
        ],
        "vendor": "Nhẫn cưới kim cương",
        "published_at": "2016-12-14T09:49:34.433Z",
        "created_at": "2017-07-06T09:29:14.804Z",
        "not_allow_promotion": false
      },
      "code": `
      async getHeader() {
        let header;
        await this.localStorage.getCartCookie().then(data => {
          if(data !== null && data !== undefined){
            this.cartCookie = data;
          }
          header = new HttpHeaders({
            'X-Suplo-Haravan-Cookie': this.cartCookie
          })
        })
        return header
      }
    
      async getCart() {
        let headers = await this.getHeader()
        return await this.get("/cart", {
          headers: headers
        }).toPromise();
      }
      `
    },
    {
      "endpoint": "/cart/:action",
      "description":  "Thêm/sửa/xoá giỏ hàng - :action = 'add'| 'change' | 'update'",
      "code": `
      async addProductToCart(id, quantity) {
        let headers = await this.getHeader()
    
        let payload = {
          id: id,
          quantity: quantity
        }
        let options = {
          observe: "response",
          headers: headers
        }
    
        return await this.post("/cart/add", payload, options).pipe(
          tap(resp => {
            this.cartCookie = resp.headers.get("x-suplo-haravan-cookie");
          })
        ).toPromise();
      }
      `,
      "res": {
        "products": [
          {
            "id": 1017630275,
            "title": "Dây chuyền DC MAMD 130",
            "featured_image": "//hstatic.net/0/0/global/noDefaultImage6_large.gif",
            "handle": "day-chuyen-dc-mamd-130",
            "compare_at_price": 0,
            "compare_at_price_format": "0₫",
            "price": 193500000,
            "price_format": "1,935,000₫",
            "available": true,
            "sale": "-0%"
          }
        ],
        "paginate": {
          "pages": 158,
          "items": 1257,
          "current_page": 1,
          "hasNext": true
        }
      }
    },
  ]

  constructor(){}
}
