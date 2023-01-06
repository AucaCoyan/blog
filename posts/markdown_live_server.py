import os
import sys
import time


def MarkdownLiveServer():
    program_arguments = sys.argv

    if len(program_arguments) == 2:
        markdown_file = program_arguments[1]
        os.system("cls")
        os.system(f"glow {markdown_file}")

        while True:

            current_time = time.time()
            modification_time = os.stat(markdown_file).st_ctime
            print(current_time)
            print(modification_time)
            time_diff = abs(current_time - modification_time)
            time_diff = int(time_diff)
            print(f"difference: {time_diff}")

            if time_diff < 2:
                os.system("clear")
                os.system(f"glow {markdown_file}")

            time.sleep(1)
    else:
        print("no markdown file provided")


if __name__ == "__main__":
    try:
        MarkdownLiveServer()
    except KeyboardInterrupt:
        print("thanks for using glow live server")
