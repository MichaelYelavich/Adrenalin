import subprocess

class Plugin:
    async def set_thp_state(self, state):
        if state:
            with open("/sys/kernel/mm/transparent_hugepage/enabled", "w") as f:
                f.write("always")
        else:
            with open("/sys/kernel/mm/transparent_hugepage/enabled", "w") as f:
                f.write("madvise")

        return await self.get_thp_state(self)


    async def get_thp_state(self):
        with open("/sys/kernel/mm/transparent_hugepage/enabled", "r") as f:
            return f.read().strip().startswith("[always]")
