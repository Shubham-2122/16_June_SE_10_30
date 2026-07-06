#include<iostream>
using namespace std;

int main()
{
	int a[5],i;
	
	for(i=0;i<5;i++){
		cout<<"Enter your Element : ";
		cin>>a[i];
	}
	
	for(i=0;i<5;i++){
//		printf("a[%d] : %d\n",i,a[i]);
		cout<<"a["<<i<<"] : "<<a[i]<<endl;
	}
	
	
	return 0;
}
