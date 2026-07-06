#include<iostream>
using namespace std;

int main()
{
	int a,b,c;
	
	cout<<"Enter Your A : ";
	cin>>a;
	cout<<"Enter Your B : ";
	cin>>b;
	cout<<"Enter Your C : ";
	cin>>c;
	
	if(a>b && a>c){
		cout<<"A is max :"<<a;
	}
	else if(b>c){
		cout<<"B is Max :"<<b;
	}
	else{
		cout<<"C is Max :"<<c;
	}
	
	return 0;
	
}
