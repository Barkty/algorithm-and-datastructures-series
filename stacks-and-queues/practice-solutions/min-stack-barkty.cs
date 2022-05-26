using System;

public class MinStack 
{

    static readonly int MAX = 1000;
    int count;
    int[] stack = new int[MAX];

    public MinStack() 
    {
        count = -1;
    }
    
    public void Push(int val) 
    {
        if (count >= MAX)
        {
            Console.WriteLine("Stack Overflow");
        }
        else
        {
            stack[++count] = val;
        }
        Console.WriteLine(stack);
    }
    
    public void Pop() 
    {
        if (count < 0)
        {
            Console.WriteLine("Stack Underflow");
        }
        else
        {
            int value = stack[count--];
        }
    }
    
    //Get the element with the highest value
    public int Top() 
    {
        for (int i = 0; i < count; i++)
        {
            for (int j = 1; j < count; j++)
            {
                if (j < i)
                {
                    return j;
                }
                return i;
            }
        }
    }
    
    public int GetMin() {
        
    }

    public Main()
    {
        MinStack obj = new MinStack();
        obj.Push(-1);
        obj.Push(11);
        obj.Push(1);
        obj.Push(3);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */
