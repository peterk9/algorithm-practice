/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let list = new ListNode(0);
    let start = list;
    let carry = 0;
    let val1 = 0;
    let val2 = 0;
    let sum = 0;

    while (l1 || l2 || carry == 1) {

        l1 !== null ? val1 = l1.val : val1 = 0
        l2 !== null ? val2 = l2.val : val2 = 0

        sum = val1 + val2 + carry;

        if (sum >= 10) {
            sum = sum - 10;
            carry = 1;
        } else {
            carry = 0;
        }

        list.val = sum;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        if (l1 || l2 || carry === 1) list.next = new ListNode(0);
        else list.next = null;

        list = list.next;
    }

    return start;
}