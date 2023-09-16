import sys
from sympy import symbols, Eq, solve

def calculate_XY(min_font, max_font, min_vp, max_vp):
    X, Y = symbols('X Y')
    
    equation1 = Eq(min_font * 16, X * (min_vp / 100) - Y * 16)
    equation2 = Eq(max_font * 16, X * (max_vp / 100) - Y * 16)

    solution = solve((equation1, equation2), (X, Y))
    return solution

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python script.py min_font max_font min_vp max_vp")
        sys.exit(1)

    min_font = float(sys.argv[1])
    max_font = float(sys.argv[2])
    min_vp = float(sys.argv[3])
    max_vp = float(sys.argv[4])

    result = calculate_XY(min_font, max_font, min_vp, max_vp)
    
      # Accessing the values of X and Y from the dictionary
    X_value = result[symbols('X')]
    Y_value = result[symbols('Y')]
#.2f is to round the float to the nearest 3 decimals
#    print("clamp(", min_font, "rem, ", format(X_value, ".3f"), "vw - ", format(Y_value, ".3f"), "rem, ", max_font, "rem)")
    output = "clamp({min}rem, {val1}vw - {val2}rem, {max}rem)".format(min=min_font, val1=format(X_value, ".3f"), val2=format(Y_value, ".3f"), max=max_font)
    print(output)

