# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:


        lenA = 0 
        lenB = 0
        l1 = headA
        l2 = headB

        while l1:
            l1 = l1.next
            lenA += 1


        while l2:
            l2 = l2.next
            lenB += 1



        diff = abs(lenA - lenB)


        l1 = headA
        l2 = headB

        if lenA > lenB:
            for _ in range(diff):
                l1 = l1.next
        else:
            for _ in range(diff):
                l2 = l2.next


        while l1 and l2:
            if l1 == l2:
                return l1

            l1 = l1.next
            l2 = l2.next




        return None                  





        