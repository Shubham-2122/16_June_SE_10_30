#include<iostream>
using namespace std;

int value()
{
	return 100;
}

void data(){
	int i;
	for(i=1;i<=20;i++){
		cout<<"*";
	}
}

int main()
{
	data();
	cout<<"\n";
	cout<<"Num : "<<value();
	cout<<"\n";
	data();
	return 0;
}
