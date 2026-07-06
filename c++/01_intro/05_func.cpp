#include<iostream>
using namespace std;

void sum(int a,int b){
	int add = a+b;
	cout<<"Sum : "<<add;
}

int sub(int a,int b){
	int data = a - b;
	return data;
}

int main()
{
	sum(30,20);
	cout<<"\n";
	sum(50,20);
	cout<<"\n";
	cout<<"Sub : "<<sub(60,10);
	return 0;
}
