#include<iostream>
using namespace std;

class Load{
	public:
		void display(int x){
			cout<<"X : "<<x;
		}
		void display(int a, int b){
			cout<<"\nSum :"<<a+b;
		}
};

int main()
{
	Load user;
	user.display(20);
	user.display(30,20);
	
	return 0;
}
