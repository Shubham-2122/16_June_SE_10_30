#include<iostream>
using namespace std;

inline int square(int x){
	return x*x;
}

int main()
{
	
	int num;
	cout<<"Enter your num : ";
	cin>>num;
	cout<<"Num : "<<num<<" Number of Square : "<<square(num);
	
	return 0;
	
}
