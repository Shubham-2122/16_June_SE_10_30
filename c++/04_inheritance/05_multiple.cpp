 /*
 	class A{
	 
	}
	class B : public A {
	
	}
	class C : public B{
	}
 	
 */
#include<iostream>
using namespace std;

class A{
	public:
		void data(){
			cout<<"A class function"<<endl;
		}
};

class B{
	public:
		void dataB(){
			cout<<"B class Function"<<endl;
		}
};
class C : public A , public B {
	public:
		void dataC(){
			cout<<"C class Function"<<endl;
		}
};


int main()
{
	C user;
	user.dataB();
	user.data();
	user.dataC();
	

	
	return 0;
}
