import * as ApiService from './ApiService';

/**
 *  @summary 출고가 되지 않은 내역이 있는 지점 리스트 가져오기
 *  @param
 *  @returns [ {
        "_id": 주문 아이디
        "branchCode": 지점 코드,
        "branchName": 지점명,
        "updatedAt": 최근 수정 시간
    }]
 */
export const getStoreList = () => ApiService.get('/api/tempOrder/branch/incomplete/');

/**
 * @summary 해당 지점에 맞는 주문 정보 가져오기
 * @param companyCode : 가져올 업체의 코드
 * @returns [ {
        "_id": 주문 아이디
        "companyCode": 업체코드(product),
        "branchCode": 지점 코드,
        "branchName": 지점명,
        "irems" [
            "itemCode" : 물품 코드
            "itemName" : 물품 이름
            "itemCount" : 물품 갯수
            "itemCost" : 물품 비용
            "itemVolume" : 물품 단위
            "itemDepth" : 왜있는 거지?
        ]
        "updatedAt": 최근 수정 시간
    }]
 */
export const getOrderData = companyCode => ApiService.get(`/api/tempOrder/${companyCode || ''}`);

/**
 * @summary 임시주문 변경하기
 * @param companyCode :
 * @returns returnCode
 */
export const updateComplete = companyCode => ApiService.put(`/api/tempOrder/complete/${companyCode || ''}`);

/**
 * @summary 임시주문 취소하기
 * @param id : 주문취소할 id
 * @returns returnCode {success : 0000, fail: 3016}
 */
export const deleteTempOrder = id => ApiService.del(`/api/tempOrder/${id || ''}`);

/**
 * @author jinseong
 * @summary 임시주문 생성
 * @param
 *  {
        "complete": 출고처리(false),
        "companyCode": 업체 코드,
        "items" [
            "itemCode" : 물품 코드
            "itemName" : 물품 이름
            "itemCount" : 물품 갯수
            "itemCost" : 물품 비용
            "itemVolume" : 물품 단위
            "itemDepth" :
        ]
    }
 * @returns
 */
export const createTempOrder = data => ApiService.post('/api/tempOrder', data);
