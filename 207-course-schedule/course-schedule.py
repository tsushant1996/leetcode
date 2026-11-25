class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:

        graph = {}

        for i in range(numCourses):
            graph[i] = []


        for prereq in prerequisites:
            course, pre = prereq
            graph[pre].append(course)




        visited = set()
        visiting = set()


        def dfs(course):
            if course in visiting:
                return False

            if course in visited:
                return True    

            visiting.add(course)

            for pre in graph[course]:
                if pre in visited:
                    continue

                if not dfs(pre):
                    return False

            visited.add(course)
            visiting.remove(course)

            return True




        for course in range(numCourses):
            if not dfs(course):
                return False

            numCourses -= 1    
        

        return True






            

                      